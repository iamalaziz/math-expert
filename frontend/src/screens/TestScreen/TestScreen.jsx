import { useParams } from 'react-router-dom';
import SectionItem from '../../components/SectionItem/SectionItem';
import { useGetQuestionQuery } from '../../slices/questionsApiSlice';

const TestScreen = () => {
  const { id: questionId } = useParams();
  const { data: unitTest, isLoading, error } = useGetQuestionQuery(questionId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <div>Error{error.data.message}</div>;
  }

  return (
    <div>
      <h1>{unitTest.title}</h1>
      <p>{unitTest.numberOfSections}</p>
      <p>Start solving questions below!</p>
      {unitTest.sections.map((s) => (
        <SectionItem key={s._id} section={s} />
      ))}
    </div>
  );
};

export default TestScreen;
