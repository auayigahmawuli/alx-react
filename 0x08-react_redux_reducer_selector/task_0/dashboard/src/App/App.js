import React from 'react';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { user, logOut } from './AppContext';
import AppContext from './AppContext';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = { displayDrawer: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);

    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: listNotifications,
    };
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleClick);
  }
  
  handleClick(event) {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({ user: { email: email, password: password, isLoggedIn: true } });
  }
  
  logOut() {
    this.setState({ user: user });
  }

  markNotificationAsRead(id) {
    const newListNotification = this.state.listNotifications.filter(notification => { return notification.id !== id; });
    this.setState({ listNotifications: newListNotification});
  }

  render() {
    const { user, logIn, logOut } = this.state;
    const { displayDrawer } = this.state;
    const { listNotifications } = this.state;
    return (
      <AppContext.Provider value={{ user, logOut }}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className='App'>
          <Header />
          <div className={css(style.appBody)}>
            {user.isLoggedIn ? 
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom> :
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={logIn} />
              </BodySectionWithMarginBottom>
            }
            <BodySection title='News from the School'>
              <p>So, here i am testing out my frontend skills. Feels good, ABSOLUTELY!!!</p>
            </BodySection>
          </div>
          <div className={css(style.footer)}>
            <Footer></Footer>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}
  
const style = StyleSheet.create({
  appBody: {
    backgroundColor: '#fff',
    padding: '4rem',
    minHeight: '26rem',
  },

  appFooter: {
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '100%',
    bottom: '0px',
    borderTop: '3px solid #e1354b',
    fontStyle: 'italic',
    padding: '1rem 0'
  }
});
  
export default App;