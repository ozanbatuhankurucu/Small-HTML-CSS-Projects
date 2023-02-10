import { StepsDataType } from './types'

export const getBoxIsSelectedCondition = (selectedStep: number, step: number) =>
  selectedStep !== undefined && step === selectedStep

export const getFirstEmptyStep = (steps: StepsDataType) => {
  const { firstStep, secondStep, thirdStep } = steps

  if (!firstStep.selectedValue) {
    return firstStep.step
  }

  if (!secondStep.selectedValue) {
    return secondStep.step
  }

  if (
    !thirdStep.selectedValue?.bottomFile ||
    !thirdStep.selectedValue.leftFile ||
    !thirdStep.selectedValue.rightFile ||
    !thirdStep.selectedValue.topFile
  ) {
    return thirdStep.step
  }
  return Object.keys(steps).length
}
