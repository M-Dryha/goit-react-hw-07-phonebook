// import { useSelector } from 'react-redux';
// import { deleteContacts } from '../../redux/myContactsSlice';
import { ThreeCircles } from 'react-loader-spinner';
// import { toast } from 'react-toastify';
import { useGetContactsQuery } from '../../redux/myContactsSlice';
import ContactElem from '../ContactElem';
import s from './listContacts.module.css';

const ListContacts = () => {
  // const contacts = useSelector(state => state.contacts);
  const { data, isLoading } = useGetContactsQuery();

  // const filter = useSelector(state => state.filter);
  // const dispatch = useDispatch();

  // const normalizedFilter = filter.toLowerCase();
  // const visibleContact = contacts.filter(f =>
  //   f.name.toLowerCase().includes(normalizedFilter)
  // );
  return (
    <ul className={s.list}>
      {isLoading && (
        <ThreeCircles
          height="50"
          width="50"
          color="violet"
          outerCircleColor="grey"
          middleCircleColor="violet"
          innerCircleColor="grey"
        />
      )}
      {data &&
        data.map(({ id, name, phone }) => (
          <ContactElem key={id} name={name} phone={phone} id={id} />
        ))}
    </ul>
  );
};

export default ListContacts;
