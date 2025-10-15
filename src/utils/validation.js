// Form validation helpers

export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateImageFile = (file) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Please select a valid image file (JPG, PNG, or WebP)' };
  }

  if (file.size > maxSize) {
    return { valid: false, error: 'Image size must be less than 5MB' };
  }

  return { valid: true };
};

export const validateJobForm = (data) => {
  const errors = {};

  if (!data.jobName || data.jobName.trim().length === 0) {
    errors.jobName = 'Job name is required';
  } else if (data.jobName.length > 100) {
    errors.jobName = 'Job name must be less than 100 characters';
  }

  if (!data.jobDescription || data.jobDescription.trim().length === 0) {
    errors.jobDescription = 'Job description is required';
  } else if (data.jobDescription.length > 1000) {
    errors.jobDescription = 'Job description must be less than 1000 characters';
  }

  if (!data.payRange || data.payRange.trim().length === 0) {
    errors.payRange = 'Pay range is required';
  }

  if (!data.location || data.location.trim().length === 0) {
    errors.location = 'Location is required';
  }

  if (!data.positionType) {
    errors.positionType = 'Position type is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateProjectForm = (data) => {
  const errors = {};

  if (!data.description || data.description.trim().length === 0) {
    errors.description = 'Description is required';
  } else if (data.description.length > 500) {
    errors.description = 'Description must be less than 500 characters';
  }

  if (!data.projectSize || data.projectSize.trim().length === 0) {
    errors.projectSize = 'Project size is required';
  }

  if (!data.projectType) {
    errors.projectType = 'Project type is required';
  }

  if (!data.projectLength || data.projectLength.trim().length === 0) {
    errors.projectLength = 'Project length is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateUserForm = (data) => {
  const errors = {};

  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.displayName || data.displayName.trim().length === 0) {
    errors.displayName = 'Display name is required';
  } else if (data.displayName.length > 50) {
    errors.displayName = 'Display name must be less than 50 characters';
  }

  if (!data.password || data.password.length === 0) {
    errors.password = 'Password is required';
  } else if (!validatePassword(data.password)) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
