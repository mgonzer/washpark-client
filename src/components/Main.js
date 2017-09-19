import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import LoginSignup from './user/LoginSignup';
import Admin from './admin/Admin';
import AdminPage from './admin/AdminPage';
import Dashboard from './user/Dashboard';
import TreatmentPage from './user/TreatmentPage'
import HerbPage from './admin/HerbPage';
import ResourcePage from './admin/ResourcePage';
import ResourcePagePatient from './user/ResourcePagePatient';
import ResourceListPagePatient from './user/ResourceListPagePatient'
import SingleResource from './user/SingleResource';
import SingleResourceAdmin from './admin/SingleResourceAdmin'
import PatientPage from './admin/PatientPage';
import SinglePatient from './admin/SinglePatient'
import PatientResources from './user/PatientResources';
import ResourceListPage from './admin/ResourceListPage';
import Schedule from './user/Schedule';
import Kindara from './user/Kindara'
import { login, signup, adminLogin, getPatients, getOnePatient,
  loadPatientData, addNote, pinArticle, pinArticlePractitioner,
  updateUser, deleteNote, removeResource } from '../actions/userActions';
import { getHerbs, updateHerbs, addHerb } from '../actions/herbAction';
import { getResources, getOneResource, getSomeResources, addResource } from '../actions/resourceAction';

class Main extends Component {

componentDidMount(){

}

  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' render={() => <LoginSignup {...this.props} />} />
          <Route exact path='/Admin' render={()=> <Admin {...this.props}/>}  />
          <Route exact path='/Dashboard' render={() => <Dashboard {...this.props} />} />
          <Route exact path='/Treatment' render={() => <TreatmentPage {...this.props} />} />
          <Route exact path='/Pinned' render={() => <PatientResources {...this.props} />} />
          <Route exact path='/Resources' render={() => <ResourcePagePatient {...this.props} />} />
          <Route exact path='/Resources/category/:category' render={() => <ResourceListPagePatient {...this.props} />} />
          <Route path='/Resources/:id' render={() => <SingleResource {...this.props} />} />
          <Route exact path='/Schedule' render={() => <Schedule {...this.props} />} />
          <Route exact path='/Kindara' render={() => <Kindara {...this.props} />} />
          <Route exact path='/Adminpage' render={() => <AdminPage {...this.props} />} />
          <Route exact path='/Adminpage/herbs' render={() => <HerbPage {...this.props} />} />
          <Route exact path='/Adminpage/patients' render={() => <PatientPage {...this.props} />} />
          <Route path= '/Adminpage/patients/:id' render={() => <SinglePatient {...this.props} />} />
          <Route exact path='/Adminpage/resources' render={() => <ResourcePage {...this.props} />} />
          <Route exact path='/Adminpage/resources/:id' render={() => <SingleResourceAdmin {...this.props} />} />
          <Route path='/Adminpage/resources/category/:category' render={() => <ResourceListPage {...this.props} />} />

      </Switch>
      </main>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => {
      dispatch(login(user));
    },
    onSignup: (user) => {
      dispatch(signup(user));
    },
    onAdminLogin: (user) => {
      dispatch(adminLogin(user));
    },
    onGetHerbs: () => {
      dispatch(getHerbs());
    },
    onUpdateHerbs: (id, quantity) => {
      dispatch(updateHerbs(id, quantity))
    },
    onGetResources: ()=> {
      dispatch(getResources());
    },
    onGetSomeResources: (category)=>{
      dispatch(getSomeResources(category))
    },
    onAddResource: (resource)=>{
      dispatch(addResource(resource))
    },
    onGetOnePatient: (id) => {
      dispatch(getOnePatient(id))
    },
    onGetPatients: () => {
      dispatch(getPatients())
    },
    onGetOneResource: (id) => {
      dispatch(getOneResource(id))
    },
    onLoadPatientData: () => {
      dispatch(loadPatientData())
    },
    onAddNote: (id, note) => {
      dispatch(addNote(id, note))
    },
    onPinArticle: (article) => {
      dispatch(pinArticle(article))
    },
    onPinArticlePractitioner: (id, article) => {
      dispatch(pinArticlePractitioner(id, article))
    },
    onUpdateUser: (id, user) => {
      dispatch(updateUser(id, user))
    },
    onDeleteNote: (uId, nId) => {
      dispatch(deleteNote(uId, nId))
    },
    onRemoveResource: (uId, rId) => {
      dispatch(removeResource(uId, rId))
    },
    onAddHerb: (herb)=>{
      dispatch(addHerb(herb))
    }
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));
