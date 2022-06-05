import { useNavigate } from "react-router-dom";

export const withRouter = () => {
  const navigate = useNavigate();

  return navigate;
};
