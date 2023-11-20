import { ValidateProfileError, type Profile } from '../../types/profile'

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (profile == null) {
        return [ValidateProfileError.NO_DATA]
    }
    const { firstName, lastName, age, country } = profile
    const errors: ValidateProfileError[] = []

    if (!firstName || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY)
    }

    return errors
}
