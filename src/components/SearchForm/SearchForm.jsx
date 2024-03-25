import { Field, Form, Formik } from "formik";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSetSearchQuery, searchQuery }) => {
  return (
    <Formik
      initialValues={{ query: searchQuery ?? "" }}
      onSubmit={(values) => {
        onSetSearchQuery(values.query);
      }}
    >
      <Form className={css.formContainer}>
        <Field placeholder='Movies' type='text' name='query' />
        <button type='submit'>Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
