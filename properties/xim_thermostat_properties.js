/*
 * Copyright (c) 2017
 * Qblinks Incorporated ("Qblinks").
 * All rights reserved.
 *
 * The information contained herein is confidential and proprietary to
 * Qblinks. Use of this information by anyone other than authorized employees
 * of Qblinks is granted only under a written non-disclosure agreement,
 * expressly prescribing the scope and manner of such use.
 */

module.exports = {
  xim_content: {
    $isOptional: true,
    $skip: true,
  },
  xim_type: {
    $in: [
      'thermostat',
    ],
  },
  xim_channel: {
    $in: [
      'nest',
    ],
  },
  xim_channel_set: {
    $isPositiveIntegerOrZero: true,
    $minValue: 0,
    $maxValue: 2,
  },
  quantum_token: {
    $isOptional: true,
    $minLength: 1,
    $: {
      $notEmptyString: true,
    },
  },
  list: {
    $isOptional: true,
    $: {
      device_name: {
        $notEmptyString: true,
      },
      device_id: {
      },
      heat_support: {
        $isOptional: true,
        $in: [
          true,
          false,
        ],
      },
      cool_support: {
        $isOptional: true,
        $in: [
          true,
          false,
        ],
      },
      fan_control_support: {
        $isOptional: true,
        $in: [
          true,
          false,
        ],
      },
      eco_support: {
        $isOptional: true,
        $in: [
          true,
          false,
        ],
      },
      status: {
        $isOptional: true,
        icon_url: {
          $isOptional: true,
          $notEmptyString: true,
        },
        ambient_temperature_f: {
          $isOptional: true,
          $isPositiveIntegerOrZero: false,
          $minValue: -50,
          $maxValue: 150,
        },
        targeted_temperature_f: {
          $isOptional: true,
          $isPositiveIntegerOrZero: true,
          $minValue: 50,
          $maxValue: 90,
        },
        ambient_temperature_c: {
          $isOptional: true,
          $isPositiveIntegerOrZero: false,
          $minValue: -50,
          $maxValue: 70,
        },
        targeted_temperature_c: {
          $isOptional: true,
          $isPositiveIntegerOrZero: false,
          $minValue: 9,
          $maxValue: 32,
        },
        ambient_humidity: {
          $isOptional: true,
          $isPositiveIntegerOrZero: true,
          $minValue: 0,
          $maxValue: 100,
        },
        fan: {
          $isOptional: true,
          $in: [
            true,
            false,
          ],
        },
        fan_timer: {
          $isOptional: true,
          $in: [
            true,
            false,
          ],
        },
        fan_timer_timeout: {
          $isOptional: true,
          $notEmptyString: true,
        },
        mode: {
          $in: [
            'heat',
            'cool',
            'heat-cool',
            'eco',
            'off',
          ],
        },
        homeaway: {
          $isOptional: true,
          $in: [
            true,
            false,
          ],
        },
        connected: {
          $isOptional: true,
          $in: [
            true,
            false,
          ],
        },
        aciton_result: {
          $isOptional: true,
          $in: [
            true,
            false,
          ],
        },
      },
    },
  },
  locale: {
    $minLength: 1,
    $isOptional: true,
    $: {
      $notEmptyString: true,
    },
  },
  result: {
    $isOptional: true,
    err_no: {
      $isPositiveIntegerOrZero: true,
    },
    err_msg: {
      $isOptional: true,
    },
  },
};