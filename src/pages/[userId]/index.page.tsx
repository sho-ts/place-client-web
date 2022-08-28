import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from '@/types/page';
import type { User } from '@/types/user';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { getUser } from '@/repositories/user/get';
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

type Props = {
  user: User;
};

const UserProfilePage: NextPageWithLayout<Props> = ({ user }) => {
  const { data: postsData } = usePostsFindAllSWR({
    displayId: user.displayId,
    limit: 9,
  });
  const { data: followsData } = useGetFollowsByDisplayIdSWR({
    displayId: user.displayId,
  });
  const { data: followersData } = useGetFollowersByDisplayIdSWR({
    displayId: user.displayId,
  });

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

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const userId = context.query.userId;

  try {
    if (!userId || typeof userId === 'object') {
      throw new Error('ユーザーIDが不正です');
    }

    const response = await getUser(userId);

    return {
      props: {
        user: response.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

UserProfilePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default UserProfilePage;
