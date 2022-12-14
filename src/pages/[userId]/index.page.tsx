import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import type { Props } from '@/server/user/getServerSidePropsUser';
import { APP_NAME } from '@/constants/service';
import { useCallback } from 'react';
import { usePostsFindAllSWR } from '@/repositories/post/swr';
import {
  useGetFollowsByDisplayIdSWR,
  useGetFollowersByDisplayIdSWR,
} from '@/repositories/follow/swr';
import { TypographyHeader } from '@/components/molecules';
import { PostsGrid } from '@/components/organisms/post';
import { UserProfile } from '@/components/organisms/user';
import { Layout, Container, Wrapper } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

const UserProfilePage: NextPageWithLayout<Props> = ({ user }) => {
  const { data: postsData } = usePostsFindAllSWR({
    displayId: user.displayId,
    limit: 9,
  });
  const { data: followsData, mutate: followsMutate } =
    useGetFollowsByDisplayIdSWR({
      displayId: user.displayId,
    });
  const { data: followersData, mutate: followersMutate } =
    useGetFollowersByDisplayIdSWR({
      displayId: user.displayId,
    });

  const handleMutation = useCallback(() => {
    followsMutate();
    followersMutate();
  }, [followsMutate, followersMutate]);

  return (
    <Fragment>
      <Head>
        <title>{`${user.displayId} | ${APP_NAME}`}</title>
      </Head>
      <TypographyHeader>{user.displayId}</TypographyHeader>
      <Wrapper>
        <Container sx={{ mb: 2 }}>
          <UserProfile
            user={user}
            handleMutation={handleMutation}
            totalPosts={postsData?.total}
            totalFollows={followsData?.total}
            totalFollowers={followersData?.total}
          />
        </Container>
        <Container sx={{ px: { xs: '0', md: '8px' } }}>
          {postsData && (
            <div id="posts">
              <PostsGrid
                spacing={{ xs: '1px', md: 1 }}
                posts={postsData}
                xs={4}
              />
            </div>
          )}
        </Container>
      </Wrapper>
    </Fragment>
  );
};

export { default as getServerSideProps } from '@/server/user/getServerSidePropsUser';

UserProfilePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default UserProfilePage;
