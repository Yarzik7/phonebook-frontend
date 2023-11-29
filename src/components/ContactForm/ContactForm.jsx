import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact, updateContact } from 'Redux/contacts/operations';
import { selectContacts } from 'Redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { showNotify } from 'js/notifyFunc';
import Input from 'components/Input/Input';
import Form from 'components/Form/Form';

const ContactForm = ({ currentContact, onCloseModal }) => {
  const [name, setName] = useState(currentContact?.name ?? '');
  const [number, setNumber] = useState(currentContact?.number ?? '');

  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleCreateContactData = () => {
    const contactData = {};
    const contactDataPairs = Object.entries({ name, number });

    for (const pair of contactDataPairs) {
      if (currentContact?.[pair[0]] !== pair[1]) {
        contactData[pair[0]] = pair[1];
      }
    }

    return contactData;
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (
      items.some(
        ({ name: contactName }) =>
          contactName.toLowerCase() === name.toLowerCase() &&
          contactName.toLowerCase() !== currentContact?.name.toLowerCase()
      )
    ) {
      showNotify(`${name} is already in contact`, 'warning');
      return;
    }

    const contactData = handleCreateContactData();

    if (!Object.keys(contactData).length) {
      showNotify('Update at least one field!', 'failure');
      return;
    }

    const operationResult = await dispatch(
      currentContact
        ? updateContact({ contactId: currentContact.contactId, updData: contactData })
        : addContact({ id: nanoid(), ...contactData })
    );

    if (operationResult.error) {
      showNotify(operationResult.payload.message, 'failure', 5000);
      return;
    }

    reset();
    onCloseModal();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form buttonCaption={`${currentContact ? 'Update' : 'Add'} contact`} onSubmit={handleSubmit}>
      <Input
        label="Name"
        type="text"
        name="name"
        pattern="^[A-Za-z\u0080-\uFFFF\- ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={name}
      />

      <Input
        label="Number"
        type="tel"
        name="number"
        pattern="^(\+?[0-9.\(\)\-\s]*)$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        value={number}
      />
    </Form>
  );
};

export default ContactForm;
