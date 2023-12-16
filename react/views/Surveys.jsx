import { PlusCircleIcon } from '@heroicons/react/24/outline';
import PageComponent from '../src/components/PageComponent';
import SurveyListItem from '../src/components/SurveyListItem';
import TButton from '../src/components/core/TButton';
import { userStateContext } from '../src/contexts/ContextProvider';

export default function Surveys() {
  const { surveys } = userStateContext();
  console.log(surveys);

  const onDeleteClick = () => {
    console.log('On Delete');
  };

  return (
    <PageComponent
      title="Surveys"
      buttons={
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create New
        </TButton>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {surveys.map((survey) => (
          <SurveyListItem
            survey={survey}
            key={survey.id}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </PageComponent>
  );
}
