'use strict';

module.exports =
    {
        'VOID': {
            'name': 'VOID',
            'value': 0,
            'label': 'Dibatalkan'
        },
        'CREATED': {
            'name': 'CREATED',
            'value': 1,
            'label': 'Purchase request dibuat'
        },
        'POSTED': {
            'name': 'POSTED',
            'value': 2,
            'label': 'Belum diterima Pembelian'
        },
        'PROCESSING': {
            'name': 'PROCESSING',
            'value': 3,
            'label': 'Sudah diterima Pembelian'
        },
        'ORDERED': {
            'name': 'ORDERED',
            'value': 4,
            'label': 'Sudah diorder ke Supplier'
        },
        'ARRIVING': {
            'name': 'ARRIVING',
            'value': 5,
            'label': 'Barang sudah datang'
        },
        'PREMATURE': {
            'name': 'PREMATURE',
            'value': 9,
            'label': 'Di close'
        },
        'COMPLETE': {
            'name': 'COMPLETE',
            'value': 9,
            'label': 'Barang sudah datang'
        }
    }