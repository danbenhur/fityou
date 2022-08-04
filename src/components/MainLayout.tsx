type Children = { children?: any };

const MainLayout: React.FC<Children> = (props) => {
  return <div>{props.children}</div>;
};
export default MainLayout;
