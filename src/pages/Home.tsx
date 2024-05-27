import PostListItem from '../components/PostListItem';
import NoPostList from '../components/NoPostList';
import useGetPostList from '../queries/useGetPostList';

// const list = [
//   {
//     post: {
//       id: 1,
//       title: '1번 게시글',
//       contents: '내용',
//       tag: TAG.REACT,
//     },
//   },
//   {
//     post: {
//       id: 2,
//       title: '2번 게시글',
//       contents: '내용',
//       tag: TAG.REACT,
//     },
//   },
//   {
//     post: {
//       id: 3,
//       title: '3번 게시글',
//       contents: '내용',
//       tag: TAG.REACT,
//     },
//   },
// ];

const Home = () => {
  const { data: postList = [], isError, isLoading } = useGetPostList();

  if (isLoading) {
    return <div>...불러오는 중...</div>;
  }

  if (postList.length === 0 || isError) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(item => (
        <PostListItem key={item.id} id={`${item.id}`} title={item.title} contents={item.contents} tag={item.tag} />
      ))}
    </div>
  );
};

export default Home;
