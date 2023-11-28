import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact, updateContact } from 'Redux/contacts/operations';
import { selectContacts } from 'Redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { showNotifyReport } from 'js/notifyFunc';
import Input from 'components/Input/Input';
import Form from 'components/Form/Form';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    if (items.some(({ name: contactName }) => contactName.toLowerCase() === name.toLowerCase())) {
      showNotifyReport(`${name} is already in contact`, 'reportWarning');
      return;
    }

    const contactData = { name, number };

    dispatch(addContact({ id: nanoid(), ...contactData }));

    reset();
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
    <Form buttonCaption={`Add contact`} onSubmit={handleSubmit}>
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
