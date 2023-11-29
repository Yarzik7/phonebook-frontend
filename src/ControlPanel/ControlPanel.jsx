import css from './ControlPanel.module.css';
import AddButton from 'components/AddButton/AddButton';

const ControlPanel = () => {
  return (
    <div className={css.controlPanelBox}>
      <AddButton />
    </div>
  );
};

export default ControlPanel;
