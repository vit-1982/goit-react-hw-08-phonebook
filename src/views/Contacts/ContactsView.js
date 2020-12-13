import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Spinner from "../../components/Spinner/Spinner";
import MainTitle from "../../components/MainTitle/MainTitle";
import Note from "../../components/Note/Note";
import Contacts from "../../components/Contacts/Contacts";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import scaleStyles from "../../components/Transitions/scale.module.css";
import noteAppearStyles from "../../components/Transitions/noteAppear.module.css";
import {
  contactsOperations,
  contactsActions,
  contactsSelectors,
} from "../../redux/contacts";

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const {
      contacts,
      contactInList,
      isLoadingContacts,
      changeFlag,
    } = this.props;

    if (contactInList) {
      setTimeout(() => changeFlag(), 2000);
    }
    return (
      <div>
        {isLoadingContacts && <Spinner />}

        <MainTitle message="Contacts">
          <CSSTransition
            in={contactInList}
            appear
            timeout={250}
            classNames={noteAppearStyles}
            unmountOnExit
          >
            <Note message="Contact already exist!" />
          </CSSTransition>
        </MainTitle>

        <Contacts />

        <CSSTransition
          in={contacts.length > 1}
          classNames={scaleStyles}
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  contactInList: contactsSelectors.getContactInList(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  changeFlag: contactsActions.changeFlag,
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
