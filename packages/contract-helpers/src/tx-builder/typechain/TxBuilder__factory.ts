/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from './common';
import type { TxBuilder, TxBuilderInterface } from './TxBuilder';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'aavePool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'wrappedBaseToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'flashLoanReceiver',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [],
    name: 'AAVE_POOL',
    outputs: [
      {
        internalType: 'contract IPool',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'FLASHLOAN_RECEIVER',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'REFERRAL_CODE',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'WRAPPED_BASE_TOKEN',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'aTokenMap',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'debtTokenMap',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct Action[]',
        name: 'actions',
        type: 'tuple[]',
      },
    ],
    name: 'executeActions',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'originator',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct Action[]',
        name: 'actions',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'executeActionsWithSig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'assets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'premiums',
        type: 'uint256[]',
      },
      {
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'flashOperation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'initiator',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'flashOperationSimple',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'toWhitelist',
        type: 'bool',
      },
    ],
    name: 'setTargetWhitelisted',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'toWhitelist',
        type: 'bool',
      },
    ],
    name: 'setTokenWhitelisted',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'targetWhitelisted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'tokenBalanceIn',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'tokenWhitelisted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'updateATokenAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x6101a06040523480156200001257600080fd5b50604051620025db380380620025db833981016040819052620000359162000302565b60408051808201825260098152682a3c213ab4b63232b960b91b60208083019182528351808501855260018152603160f81b908201529151902060e08190527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66101008190524660a081815285517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818701819052818801959095526060810193909352608080840192909252308382018190528651808503909201825260c09384019096528051940193909320909252919052610120528262000119336200026b565b6001805460ff60a01b191690556001600160a01b038116620001735760405162461bcd60e51b815260206004820152600e60248201526d2d22a927afa827a7a62fa0a2222960911b60448201526064015b60405180910390fd5b6001600160a01b03908116610140528116620001e55760405162461bcd60e51b815260206004820152602a60248201527f54784275696c6465723a205a65726f20666c6173686c6f616e207265636569766044820152696572206164647265737360b01b60648201526084016200016a565b6001600160a01b038216620002505760405162461bcd60e51b815260206004820152602a60248201527f54784275696c6465723a205a65726f2077726170706564206261736520746f6b604482015269656e206164647265737360b01b60648201526084016200016a565b6001600160a01b03908116610160521661018052506200034c565b600180546001600160a01b0319169055620002928162000295602090811b62000fd117901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620002fd57600080fd5b919050565b6000806000606084860312156200031857600080fd5b6200032384620002e5565b92506200033360208501620002e5565b91506200034360408501620002e5565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516121e6620003f56000396000818161033e015281816109ae01528181610a280152610a830152600081816102ea0152818161093401528181610cab0152610e61015260008181610198015281816108720152610b61015260006110f801526000611147015260006111220152600061107b015260006110a5015260006110cf01526121e66000f3fe6080604052600436106101815760003560e01c806379ba5097116100d157806390a36baf1161008a578063f02fdad711610064578063f02fdad7146104a5578063f2fde38b146104e6578063fd266c4114610506578063ff8507e81461053c57600080fd5b806390a36baf1461043a57806397f4097a1461045a578063e30c39781461048757600080fd5b806379ba5097146103755780637ecebe001461038a5780638456cb59146103b75780638c34a621146103cc5780638d59a8cd146103ec5780638da5cb5b1461041c57600080fd5b80635c12c8e71161013e57806366e1144b1161011857806366e1144b146102d85780636a085d821461030c578063709e8f6b1461032c578063715018a61461036057600080fd5b80635c12c8e71461027a5780635c975abb1461028d57806365a6b74d146102b857600080fd5b806308a016751461018657806309cc0510146101d75780633583849a146101f95780633644e515146102225780633a9c5712146102455780633f4ba83a14610265575b600080fd5b34801561019257600080fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101e357600080fd5b506101f76101f23660046119e5565b61056c565b005b34801561020557600080fd5b5061020f6111c281565b60405161ffff90911681526020016101ce565b34801561022e57600080fd5b5061023761082e565b6040519081526020016101ce565b34801561025157600080fd5b506101f7610260366004611a72565b61083d565b34801561027157600080fd5b506101f761098c565b6101f7610288366004611aab565b61099e565b34801561029957600080fd5b50600154600160a01b900460ff165b60405190151581526020016101ce565b3480156102c457600080fd5b506101f76102d3366004611a72565b610b0c565b3480156102e457600080fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b34801561031857600080fd5b506101f7610327366004611adf565b610b3f565b34801561033857600080fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b34801561036c57600080fd5b506101f7610c07565b34801561038157600080fd5b506101f7610c19565b34801561039657600080fd5b506102376103a5366004611adf565b60076020526000908152604090205481565b3480156103c357600080fd5b506101f7610c90565b3480156103d857600080fd5b506101f76103e7366004611b81565b610ca0565b3480156103f857600080fd5b506102a8610407366004611adf565b60026020526000908152604090205460ff1681565b34801561042857600080fd5b506000546001600160a01b03166101ba565b34801561044657600080fd5b506101f7610455366004611c5b565b610e56565b34801561046657600080fd5b50610237610475366004611adf565b60046020526000908152604090205481565b34801561049357600080fd5b506001546001600160a01b03166101ba565b3480156104b157600080fd5b506101ba6104c0366004611cd6565b60066020908152600092835260408084209091529082529020546001600160a01b031681565b3480156104f257600080fd5b506101f7610501366004611adf565b610f60565b34801561051257600080fd5b506101ba610521366004611adf565b6005602052600090815260409020546001600160a01b031681565b34801561054857600080fd5b506102a8610557366004611adf565b60036020526000908152604090205460ff1681565b610574611021565b4282116105c85760405162461bcd60e51b815260206004820152601c60248201527f54784275696c6465723a205369676e617475726520657870697265640000000060448201526064015b60405180910390fd5b82516000816001600160401b038111156105e4576105e4611800565b60405190808252806020026020018201604052801561060d578160200160208202803683370190505b50905060005b828110156106e6577f4afdb72fff5fe3298dbabbd12790f022e8c3a2c6b12c9ec13874713ee63b775586828151811061064e5761064e611d02565b60200260200101516000015187838151811061066c5761066c611d02565b602002602001015160200151805190602001206040516020016106ab939291909283526001600160a01b03919091166020830152604082015260600190565b604051602081830303815290604052805190602001208282815181106106d3576106d3611d02565b6020908102919091010152600101610613565b5060006106f161106e565b7fb66cc5e53f7b26fd05b211baa6bccc460464c9db42935211a8df2023609cab6288846040516020016107249190611d18565b60408051601f1981840301815291815281516020928301206001600160a01b038d16600090815260079093529082208054919261076083611d72565b90915550604080516001600160a01b03909416602085015283019190915260608201526080810188905260a00160408051601f19818403018152908290526107ac939291602001611ddb565b6040516020818303038152906040528051906020012090506107cf878286611195565b61081b5760405162461bcd60e51b815260206004820152601c60248201527f54784275696c6465723a205369676e617475726520696e76616c69640000000060448201526064016105bf565b61082587876112d9565b50505050505050565b600061083861106e565b905090565b610845611338565b6001600160a01b0382166000818152600360205260409020805460ff1916831515179055819063095ea7b37f000000000000000000000000000000000000000000000000000000000000000061089d60001985611e1c565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af11580156108e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090c9190611e33565b5060405163458e441560e01b81526001600160a01b03848116600483015283151560248301527f0000000000000000000000000000000000000000000000000000000000000000169063458e441590604401600060405180830381600087803b15801561097857600080fd5b505af1158015610825573d6000803e3d6000fd5b610994611338565b61099c611392565b565b6109a6611021565b3415610b02577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b158015610a0757600080fd5b505af1158015610a1b573d6000803e3d6000fd5b5050506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660009081526004602052604081208054349450909250610a69908490611e50565b90915550610a79905033826112d9565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660009081526004602052604090205415610aff5760405162461bcd60e51b815260206004820181905260248201527f54784275696c6465723a205772617070656420746f6b656e2072656d61696e7360448201526064016105bf565b50565b610aff33826112d9565b610b14611338565b6001600160a01b03919091166000908152600260205260409020805460ff1916911515919091179055565b6040516335ea6a7560e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906335ea6a75906024016101e060405180830381865afa158015610bab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcf9190611efb565b61010001516001600160a01b03928316600090815260056020526040902080546001600160a01b031916939091169290921790915550565b610c0f611338565b61099c60006113e7565b60015433906001600160a01b03168114610c875760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b60648201526084016105bf565b610aff816113e7565b610c98611338565b61099c611400565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ce85760405162461bcd60e51b81526004016105bf9061201e565b610cf0611021565b8760005b81811015610d7c57888882818110610d0e57610d0e611d02565b90506020020135600460008d8d85818110610d2b57610d2b611d02565b9050602002016020810190610d409190611adf565b6001600160a01b03166001600160a01b031681526020019081526020016000206000828254610d6f9190611e50565b9091555050600101610cf4565b506000610d8b83850185611aab565b9050610d9785826112d9565b60005b82811015610e4857600460008d8d84818110610db857610db8611d02565b9050602002016020810190610dcd9190611adf565b6001600160a01b0316815260208101919091526040016000205415610e405760405162461bcd60e51b8152602060048201526024808201527f54784275696c6465723a20466c6173686c6f616e656420746f6b656e7320726560448201526336b0b4b760e11b60648201526084016105bf565b600101610d9a565b505050505050505050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e9e5760405162461bcd60e51b81526004016105bf9061201e565b610ea6611021565b6001600160a01b03861660009081526004602052604081208054879290610ece908490611e50565b9091555060009050610ee282840184611aab565b9050610eee84826112d9565b6001600160a01b038716600090815260046020526040902054156108255760405162461bcd60e51b815260206004820152602360248201527f54784275696c6465723a20466c6173686c6f616e65642066756e64732072656d60448201526230b4b760e91b60648201526084016105bf565b610f68611338565b600180546001600160a01b0383166001600160a01b03199091168117909155610f996000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600154600160a01b900460ff161561099c5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016105bf565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156110c757507f000000000000000000000000000000000000000000000000000000000000000046145b156110f157507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b60008060006111a48585611443565b909250905060008160048111156111bd576111bd612067565b1480156111db5750856001600160a01b0316826001600160a01b0316145b156111eb576001925050506112d2565b600080876001600160a01b0316631626ba7e60e01b888860405160240161121392919061207d565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516112519190612096565b600060405180830381855afa9150503d806000811461128c576040519150601f19603f3d011682016040523d82523d6000602084013e611291565b606091505b50915091508180156112a4575080516020145b80156112cb57508051630b135d3f60e11b906112c990830160209081019084016120b2565b145b9450505050505b9392505050565b600081511161132a5760405162461bcd60e51b815260206004820152601d60248201527f54784275696c6465723a205a65726f20616374696f6e206c656e67746800000060448201526064016105bf565b6113348282611488565b5050565b6000546001600160a01b0316331461099c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105bf565b61139a611586565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600180546001600160a01b0319169055610aff81610fd1565b611408611021565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113ca3390565b60008082516041036114795760208301516040840151606085015160001a61146d878285856115d6565b94509450505050611481565b506000905060025b9250929050565b805180156115815760008261149e6001846120cb565b815181106114ae576114ae611d02565b60209081029190910181015180516001600160a01b0381166000908152600290935260409092205490925060ff166115215760405162461bcd60e51b815260206004820152601660248201527515105491d15517d393d517d5d2125511531254d5115160521b60448201526064016105bf565b600183038452600085836020015186604051602401611542939291906120de565b60408051601f198184030181529190526020810180516001600160e01b03166309a2df3960e31b17905290506108256001600160a01b0383168261169a565b505050565b600154600160a01b900460ff1661099c5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016105bf565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561160d5750600090506003611691565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611661573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661168a57600060019250925050611691565b9150600090505b94509492505050565b60606116bf838360405180606001604052806027815260200161218a602791396116c8565b90505b92915050565b6060600080856001600160a01b0316856040516116e59190612096565b600060405180830381855af49150503d8060008114611720576040519150601f19603f3d011682016040523d82523d6000602084013e611725565b606091505b509150915061173686838387611740565b9695505050505050565b606083156117af5782516000036117a8576001600160a01b0385163b6117a85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105bf565b50816117b9565b6117b983836117c1565b949350505050565b8151156117d15781518083602001fd5b8060405162461bcd60e51b81526004016105bf9190612176565b6001600160a01b0381168114610aff57600080fd5b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171561183857611838611800565b60405290565b6040516101e081016001600160401b038111828210171561183857611838611800565b604051601f8201601f191681016001600160401b038111828210171561188957611889611800565b604052919050565b600082601f8301126118a257600080fd5b81356001600160401b038111156118bb576118bb611800565b6118ce601f8201601f1916602001611861565b8181528460208386010111156118e357600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261191157600080fd5b813560206001600160401b038083111561192d5761192d611800565b8260051b61193c838201611861565b938452858101830193838101908886111561195657600080fd5b84880192505b858310156119d9578235848111156119745760008081fd5b88016040818b03601f190181131561198c5760008081fd5b611994611816565b878301356119a1816117eb565b81529082013590868211156119b65760008081fd5b6119c48c8984860101611891565b8189015284525050918401919084019061195c565b98975050505050505050565b600080600080608085870312156119fb57600080fd5b8435611a06816117eb565b935060208501356001600160401b0380821115611a2257600080fd5b611a2e88838901611900565b9450604087013593506060870135915080821115611a4b57600080fd5b50611a5887828801611891565b91505092959194509250565b8015158114610aff57600080fd5b60008060408385031215611a8557600080fd5b8235611a90816117eb565b91506020830135611aa081611a64565b809150509250929050565b600060208284031215611abd57600080fd5b81356001600160401b03811115611ad357600080fd5b6117b984828501611900565b600060208284031215611af157600080fd5b81356112d2816117eb565b60008083601f840112611b0e57600080fd5b5081356001600160401b03811115611b2557600080fd5b6020830191508360208260051b850101111561148157600080fd5b60008083601f840112611b5257600080fd5b5081356001600160401b03811115611b6957600080fd5b60208301915083602082850101111561148157600080fd5b600080600080600080600080600060a08a8c031215611b9f57600080fd5b89356001600160401b0380821115611bb657600080fd5b611bc28d838e01611afc565b909b50995060208c0135915080821115611bdb57600080fd5b611be78d838e01611afc565b909950975060408c0135915080821115611c0057600080fd5b611c0c8d838e01611afc565b909750955060608c01359150611c21826117eb565b90935060808b01359080821115611c3757600080fd5b50611c448c828d01611b40565b915080935050809150509295985092959850929598565b60008060008060008060a08789031215611c7457600080fd5b8635611c7f816117eb565b955060208701359450604087013593506060870135611c9d816117eb565b925060808701356001600160401b03811115611cb857600080fd5b611cc489828a01611b40565b979a9699509497509295939492505050565b60008060408385031215611ce957600080fd5b8235611cf4816117eb565b946020939093013593505050565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b81811015611d5057835183529284019291840191600101611d34565b50909695505050505050565b634e487b7160e01b600052601160045260246000fd5b600060018201611d8457611d84611d5c565b5060010190565b60005b83811015611da6578181015183820152602001611d8e565b50506000910152565b60008151808452611dc7816020860160208601611d8b565b601f01601f19169290920160200192915050565b608081526002608082015261190160f01b60a082015283602082015282604082015260c060608201526000611e1360c0830184611daf565b95945050505050565b80820281158282048414176116c2576116c2611d5c565b600060208284031215611e4557600080fd5b81516112d281611a64565b808201808211156116c2576116c2611d5c565b600060208284031215611e7557600080fd5b604051602081018181106001600160401b0382111715611e9757611e97611800565b6040529151825250919050565b80516fffffffffffffffffffffffffffffffff81168114611ec457600080fd5b919050565b805164ffffffffff81168114611ec457600080fd5b805161ffff81168114611ec457600080fd5b8051611ec4816117eb565b60006101e08284031215611f0e57600080fd5b611f1661183e565b611f208484611e63565b8152611f2e60208401611ea4565b6020820152611f3f60408401611ea4565b6040820152611f5060608401611ea4565b6060820152611f6160808401611ea4565b6080820152611f7260a08401611ea4565b60a0820152611f8360c08401611ec9565b60c0820152611f9460e08401611ede565b60e0820152610100611fa7818501611ef0565b90820152610120611fb9848201611ef0565b90820152610140611fcb848201611ef0565b90820152610160611fdd848201611ef0565b90820152610180611fef848201611ea4565b908201526101a0612001848201611ea4565b908201526101c0612013848201611ea4565b908201529392505050565b60208082526029908201527f54784275696c6465723a2053656e646572206e6f7420666c6173686c6f616e206040820152681c9958da5c1a595b9d60ba1b606082015260800190565b634e487b7160e01b600052602160045260246000fd5b8281526040602082015260006117b96040830184611daf565b600082516120a8818460208701611d8b565b9190910192915050565b6000602082840312156120c457600080fd5b5051919050565b818103818111156116c2576116c2611d5c565b600060018060a01b03808616835260206060818501526121016060850187611daf565b6040858203818701528187518084528484019150848160051b850101858a0160005b8381101561216457868303601f19018552815180518a16845288015188840187905261215187850182611daf565b9589019593505090870190600101612123565b50909c9b505050505050505050505050565b6020815260006116bf6020830184611daf56fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212204dd6c8e4beca41131100bce1299c8aa32f90e75d49fab991ba29842a2d1b004264736f6c63430008110033';

type TxBuilderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TxBuilderConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TxBuilder__factory extends ContractFactory {
  constructor(...args: TxBuilderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    aavePool: PromiseOrValue<string>,
    wrappedBaseToken: PromiseOrValue<string>,
    flashLoanReceiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<TxBuilder> {
    return super.deploy(
      aavePool,
      wrappedBaseToken,
      flashLoanReceiver,
      overrides || {},
    ) as Promise<TxBuilder>;
  }
  override getDeployTransaction(
    aavePool: PromiseOrValue<string>,
    wrappedBaseToken: PromiseOrValue<string>,
    flashLoanReceiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      aavePool,
      wrappedBaseToken,
      flashLoanReceiver,
      overrides || {},
    );
  }
  override attach(address: string): TxBuilder {
    return super.attach(address) as TxBuilder;
  }
  override connect(signer: Signer): TxBuilder__factory {
    return super.connect(signer) as TxBuilder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TxBuilderInterface {
    return new utils.Interface(_abi) as TxBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): TxBuilder {
    return new Contract(address, _abi, signerOrProvider) as TxBuilder;
  }
}
