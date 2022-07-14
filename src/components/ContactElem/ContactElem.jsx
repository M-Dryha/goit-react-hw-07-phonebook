import { toast } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner';
import { useDeleteContactMutation } from '../../redux/myContactsSlice';
import s from './ContactElem.module.css';

const ContactElem = ({ id, name, phone }) => {
  //  const { data, isLoading } = useGetContactsQuery();

  const [deleteContacts, { isLoading }] = useDeleteContactMutation();
  if (isLoading) {
    toast.success('Contact deleted successfully');
  }
  return (
    <li className={s.itemContact} key={id}>
      <p className={s.contact}>{name}:</p>
      <p className={s.contact}>{phone}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContacts(id)}
      >
        {isLoading ? (
          <ThreeCircles
            height="10"
            width="10"
            color="violet"
            outerCircleColor="grey"
            middleCircleColor="violet"
            innerCircleColor="grey"
          />
        ) : (
          'Delete'
        )}
      </button>
    </li>
  );
};

export default ContactElem;
