import {
  Step,
  StepLabel,
  Stepper,
  Button,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        <Step key={0}>
          <StepLabel>1</StepLabel>
        </Step>
        <Step key={1}>
          <StepLabel>2</StepLabel>
        </Step>
        <Step key={2}>
          <StepLabel>3</StepLabel>
        </Step>
        <Step key={4}>
          <StepLabel>4</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 4 ? (
        <Typography variant='h3' align='center'>
          Thank You
        </Typography>
      ) : (
        <>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            onClick={handleNext}
          >
            {activeStep === 3 ? 'Finish' : 'Next'}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinearStepper;
