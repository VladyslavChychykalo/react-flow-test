import { FormGroup, Input } from 'reactstrap';
import { Handle } from 'react-flow-renderer';

const Trigger = (props) => {
  console.log(props);
  const flowStyle = { fontSize: '1.2rem', padding: '5px 20px' };
  return (
    <>
      <p className='badge badge-pill badge-danger' style={flowStyle}>
        Trigger
      </p>
      <FormGroup>
        <Input type='select' name='select' id='triggersSelect'>
          <option>CustomerID</option>
          <option>FTD</option>
          <option>MarketingOptInInd</option>
        </Input>
      </FormGroup>
      <Handle
        type='source'
        position='bottom'
        style={{ background: '#dc3545' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
    </>
  );
};

export default Trigger;
