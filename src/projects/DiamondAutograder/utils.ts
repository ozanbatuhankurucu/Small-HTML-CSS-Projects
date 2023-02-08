export const getBoxIsSelectedCondition = (selectedStep: number, step: number) =>
  selectedStep !== undefined && step === selectedStep
