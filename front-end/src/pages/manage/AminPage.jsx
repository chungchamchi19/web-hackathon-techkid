import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import config from "../../config";
import NavbarAdminPage from "../../components/commons/admin-page/NavbarAminPage";
import { BrowserRouter, Route } from "react-router-dom";
import AddProductions from "../../components/admin-page/AddProductions";
import ManageProduction from "../../components/admin-page/ManageProduction";
import AddBlog from "../../components/admin-page/AddBlogs";
import ManageBlog from "../../components/admin-page/ManageBlogs";
import IntroManage from '../../components/admin-page/IntroManage'

class AdminPage extends React.Component {
  handleLogout = () => {
    axios({
      url: `${config.baseUrl}/api/auth/logout`,
      method: "get"
    })
      .then(response => {
        console.log(response.data);
        this.props.history.push("/admin-login");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <div className="header">
          <NavbarAdminPage handleLogout={this.handleLogout} />
        </div>
        <BrowserRouter>
          <Route path="/admin-page/logo" component ={IntroManage}></Route>
          <Route path="/admin-page/add-production" component={AddProductions} />
          <Route
            path="/admin-page/manage-production"
            component={ManageProduction}
          />
          <Route path="/admin-page/add-blog" component={AddBlog} />
          <Route path="/admin-page/manage-blog" component={ManageBlog} />
        </BrowserRouter>
      </div>
    );
  }
}

export default withRouter(AdminPage);