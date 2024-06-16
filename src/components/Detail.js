import React from "react";
import { useLocation } from "react-router-dom";

const Detail = (props) => {
  let location = useLocation();
  console.log(location);
  return <span>Description</span>;
}
// class Detail extends React.Component {
//   componentDidMount(props) {
//     console.log(this.props);
//     const { location, history } = this.props;
//     if (location.state === undefined) {
//       history.push("/");
//     }
//   }
//   render() {
//     const { location } = this.props;
//     if (location.state) {
//       return <span>{location.state.title}</span>;
//     } else {
//       return null;
//     }
//   }
// }

export default Detail;
