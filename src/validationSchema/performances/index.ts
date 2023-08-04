import * as yup from 'yup';

export const performanceValidationSchema = yup.object().shape({
  assessment_date: yup.date().required(),
  assessment_result: yup.string().required(),
  vehicle_id: yup.string().nullable().required(),
});
