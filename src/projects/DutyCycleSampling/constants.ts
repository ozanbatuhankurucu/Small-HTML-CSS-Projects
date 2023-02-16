export const APPLICATION_OPTIONS = [
  'TimeSpy Extreme, GT1',
  'TimeSpy Extreme, GT2'
]

export const DCS_DATA_RESPONSE_MOCK = {
  device: 'Test',
  application_name: 'T1',
  summary_results: [
    {
      error_code: 'FCLK_FREQ',
      description: 'F-clock must not exceed fopt for too long',
      result: 'PASS',
      summary: 'F-Clock frequency within expected range.'
    },
    {
      error_code: 'FRAME_COUNT_SKIP',
      description: 'Frame counter must not skip by more than 1',
      result: 'PASS',
      summary: 'Frame counter increased correctly.'
    },
    {
      error_code: 'FRAME_RATE_CONSISTENCY',
      description:
        'Internally computed frame rate must equal the frame rate reported by the application',
      result: 'FAIL',
      summary:
        'Average DCS frame rate (97.87 FPS) is not consistent with reported frame rate (100 FPS).'
    },
    {
      error_code: 'GFXCLK_ALIGN',
      description:
        'GFX-clock must be frame-aligned (ON whenever the frame changes)',
      result: 'PASS',
      summary: 'GFX-Clock is aligned with frame counter.'
    },
    {
      error_code: 'GFXCLK_FREQ',
      description:
        'GFX-clock GFXON state must be close to fopt most of the time',
      result: 'FAIL',
      summary:
        'GFX-Clock ON frequency operates far from fopt 33.09% of the time.'
    },
    {
      error_code: 'GFXCLK_OFF',
      description: 'GFX-clock must turn OFF between frames',
      result: 'FAIL',
      summary: 'GFX-Clock fails to duty cycle OFF for 3.28% of frames.'
    },
    {
      error_code: 'POWER_BUDGET',
      description: 'Socket power must match the target power budget',
      result: 'FAIL',
      summary: 'Power budget is not maintained 1.29% of the time.'
    },
    {
      error_code: 'UCLK_ALIGN',
      description:
        'U-clock must be frame-aligned (ON whenever the frame changes)',
      result: 'PASS',
      summary: 'U-Clock is aligned with frame counter.'
    },
    {
      error_code: 'UCLK_FREQ',
      description: 'U-clock ON state must be close to fopt most of the time',
      result: 'PASS',
      summary: 'U-Clock ON frequency is operating at fopt.'
    },
    {
      error_code: 'UCLK_OFF',
      description: 'U-clock must turn OFF (strobe mode) between frames',
      result: 'FAIL',
      summary: 'U-Clock fails to duty cycle OFF for 3.28% of frames.'
    }
  ],
  takeaway_title: 'DCS IS NOT STABLE.',
  takeaway_text: '5/10 requirements failed.'
}
