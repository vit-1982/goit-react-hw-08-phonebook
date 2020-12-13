import React from "react";
import { connect } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./ContactList.module.css";
import groupStyles from "../Transitions/group.module.css";
import PropTypes from "prop-types";
import contactsSelectors from "../../redux/contacts/contactsSelectors.js";

function ContactList({ filteredContacts }) {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {filteredContacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={groupStyles}>
          <ContactItem id={contact.id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filteredContacts: contactsSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
