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
            'label': 'PO Internal belum diorder'
        },
        'PROCESSING': {
            'name': 'PROCESSING',
            'value': 2,
            'label': 'Sudah dibuat PO Eksternal'
        },
        'ORDERED': {
            'name': 'ORDERED',
            'value': 3,
            'label': 'Sudah diorder ke Supplier'
        },
        'ARRIVING': {
            'name': 'ARRIVING',
            'value': 4,
            'label': 'Barang sudah datang'
        },
        'ARRIVED': {
            'name': 'ARRIVED',
            'value': 5,
            'label': 'Barang sudah datang'
        },
        'RECEIVING': {
            'name': 'RECEIVING',
            'value': 6,
            'label': 'Barang sudah diterima Unit'
        },
        'RECEIVED': {
            'name': 'RECEIVED',
            'value': 7,
            'label': 'Barang sudah diterima Unit'
        },
        'PAYMENT': {
            'name': 'PAYMENT',
            'value': 8,
            'label': 'Sebagian sudah dibuat SPB'
        },
        'PREMATURE': {
            'name': 'PREMATURE',
            'value': 9,
            'label': 'Sudah dibuat SPB tapi di closed'
        },
        'COMPLETE': {
            'name': 'COMPLETE',
            'value': 9,
            'label': 'Semua sudah dibuat SPB'
        }
    }