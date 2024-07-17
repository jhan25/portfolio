interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return <div className="header">{title}</div>;
};

export default Header;
