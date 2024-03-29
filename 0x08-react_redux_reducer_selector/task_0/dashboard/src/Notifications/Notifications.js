import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem'
import close_icon from '../assets/close-icon.png';
import PropTypes, { nominalTypeHack } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const buttonClick = () => {
  console.log('Close button has been clicked');
}

const buttonStyle = {
  background: 'transparent',
  border: 'none',
  display: 'flex',
  justifyContent: 'flex-end',
  outline: 'none',
  width: '100%',
}

const imageStyle = {
  width: '.7rem',
  height: '.7rem',
}

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead
    } = this.props;
    return (
      <div className={css(style.notificationContainer, style.mediumNotificationContainer)}>
        <div className={css(style.menuItem, displayDrawer ? style.hideElement: '')}
             id="menuItem"
             onClick={handleDisplayDrawer}
        >Your notifications</div>
        { displayDrawer ?
          (<div className={css(style.notifications, style.mediumNotification)} id="notifications">
            <button style={buttonStyle} aria-label='Close' onClick={handleHideDrawer} id="closeNotifications">
              <img src={close_icon} alt='Close' style={imageStyle}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(style.mediumUl)}>
              {listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={markNotificationAsRead} />) : <></>}
              {listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={markNotificationAsRead} />))}
            </ul>
          </div>)
          : <></>
        }
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

const opacityKeyframes = {
  'from': {
    opacity: 0.5,
  },

  'to': {
      opacity: 1,
  }
};

const translateKeyframes = {
  '0%': {
      transform: 'translateY(0)',
  },

  '50%': {
      transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
      transform: 'translateY(0)',
  },
};

const style = StyleSheet.create({
  notifications: {
    border: '3px dashed #e1354b',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    width: '25rem',
    background: 'white none repeat scroll 0% 0%',
  },
  mediumNotification: {
    '@media (max-width: 900px)': {
      border: 'none',
      width: '100%',
      height: '100%',
    }
  },
  menuItem: {
    marginBottom: '10px',
    float: 'right',
    textAlign: 'end',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    }
  },
  notificationContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '12px',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  mediumNotificationContainer: {
    '@media (max-width: 900px)': {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: '6',
      display: 'block !important',
    }
  },
  hideElement: {
    display: 'none',
  },
  mediumUl: {
    '@media (max-width: 900px)': {
      fontSize: '20px',
      padding: '0',
    }
  }
});