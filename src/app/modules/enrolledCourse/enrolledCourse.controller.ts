import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  createEnrolledCourseIntoDB,
  updateEnrolledCourseMarksIntoDB,
} from './enrolledCourse.service';

const createEnrolledCourse = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const result = await createEnrolledCourseIntoDB(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is enrolled successfully',
    data: result,
  });
});

const updateEnrolledCourseMarks = catchAsync(async (req, res) => {
  const facultyId = req.user.userId;
  const result = await updateEnrolledCourseMarksIntoDB(facultyId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Marks is updated successfully',
    data: result,
  });
});

export { createEnrolledCourse, updateEnrolledCourseMarks };
