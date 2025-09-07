import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

const tabsData: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabContent: React.FC = () => {
  const { tabId } = useParams();

  const currentTab = tabsData.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {currentTab ? currentTab.content : 'Please select a tab'}
    </div>
  );
};

export default TabContent;
