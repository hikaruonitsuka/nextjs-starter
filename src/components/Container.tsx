const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid min-h-screen grid-cols-[100%] grid-rows-[auto,1fr,auto]">{children}</div>;
};

export default Container;
