import {
  IDeviceRow,
  IQueueRow,
  IServiceQueue,
  IServiceRow,
  QueueStatus,
  Service,
  IReportRow,
  IUserRow,
  IRoleRow,
  IAccountLogRow,
} from './Table/Table';

export const accountLog: IAccountLogRow[] = [
  {
    userName: 'tuyetnguyen@12',
    impactTime: '1/12/2022 15:12:17',
    ip: '192.168.1.123',
    act: 'Cập nhật thông tin dịch vụ DV_01',
  },
  {
    userName: 'tuyetnguyen@12',
    impactTime: '1/12/2022 15:12:17',
    ip: '192.168.1.123',
    act: 'Cập nhật thông tin dịch vụ DV_01',
  },
  {
    userName: 'tuyetnguyen@12',
    impactTime: '1/12/2022 15:12:17',
    ip: '192.168.1.123',
    act: 'Cập nhật thông tin dịch vụ DV_01',
  },
  {
    userName: 'tuyetnguyen@12',
    impactTime: '1/12/2022 15:12:17',
    ip: '192.168.1.123',
    act: 'Cập nhật thông tin dịch vụ DV_01',
  },
  {
    userName: 'tuyetnguyen@12',
    impactTime: '1/12/2022 15:12:17',
    ip: '192.168.1.123',
    act: 'Cập nhật thông tin dịch vụ DV_01',
  },
]

export const roleList: IRoleRow[] = [
  {
    roleName: 'Kế toán',
    userNumber: 6,
    serviceDescribe: 'Thực hiện nhiệm vụ thống kê số liệu và tổng hợp dữ liệu',
    roleUpdate: true,
  },
  {
    roleName: 'Bác sĩ',
    userNumber: 6,
    serviceDescribe: 'Thực hiện nhiệm vụ thống kê số liệu và tổng hợp dữ liệu',
    roleUpdate: true,
  },
  {
    roleName: 'Lễ tân',
    userNumber: 6,
    serviceDescribe: 'Thực hiện nhiệm vụ thống kê số liệu và tổng hợp dữ liệu',
    roleUpdate: true,
  },
  {
    roleName: 'Y tá',
    userNumber: 6,
    serviceDescribe: 'Thực hiện nhiệm vụ thống kê số liệu và tổng hợp dữ liệu',
    roleUpdate: true,
  },
]

export const userList: IUserRow[] = [
  {
    userName: 'ManhThong',
    fullName: 'Mạnh Thong',
    phoneNumber: '0931158937',
    email: 'manhthongg950@gmail.com',
    role: 'Kế toán',
    isActivated: true,
    userUpdate: true,
  },
  {
    userName: 'ManhThong',
    fullName: 'Mạnh Thong',
    phoneNumber: '0931158937',
    email: 'manhthongg950@gmail.com',
    role: 'Kế toán',
    isActivated: true,
    userUpdate: true,
  },
  {
    userName: 'ManhThong',
    fullName: 'Mạnh Thong',
    phoneNumber: '0931158937',
    email: 'manhthongg950@gmail.com',
    role: 'Kế toán',
    isActivated: false,
    userUpdate: true,
  },
  {
    userName: 'ManhThong',
    fullName: 'Mạnh Thong',
    phoneNumber: '0931158937',
    email: 'manhthongg950@gmail.com',
    role: 'Kế toán',
    isActivated: false,
    userUpdate: true,
  },
  {
    userName: 'ManhThong',
    fullName: 'Mạnh Thong',
    phoneNumber: '0931158937',
    email: 'manhthongg950@gmail.com',
    role: 'Kế toán',
    isActivated: true,
    userUpdate: true,
  },
  {
    userName: 'ManhThong',
    fullName: 'Mạnh Thong',
    phoneNumber: '0931158937',
    email: 'manhthongg950@gmail.com',
    role: 'Kế toán',
    isActivated: false,
    userUpdate: true,
  },
  {
    userName: 'ManhThong',
    fullName: 'Mạnh Thong',
    phoneNumber: '0931158937',
    email: 'manhthongg950@gmail.com',
    role: 'Kế toán',
    isActivated: false,
    userUpdate: true,
  },
  {
    userName: 'ManhThong',
    fullName: 'Mạnh Thong',
    phoneNumber: '0931158937',
    email: 'manhthongg950@gmail.com',
    role: 'Kế toán',
    isActivated: true,
    userUpdate: true,
  },
  {
    userName: 'ManhThong',
    fullName: 'Mạnh Thong',
    phoneNumber: '0931158937',
    email: 'manhthongg950@gmail.com',
    role: 'Kế toán',
    isActivated: true,
    userUpdate: true,
  },
]

export const reportList: IReportRow[] = [
  {
    no: 2010001,
    serviceName: [Service.Heart],
    grantTime: '7:20 - 07/10/2022',
    queueStatus: QueueStatus.pending,
    provideBy: 'Kiosk'
  },
  {
    no: 2010001,
    serviceName: [Service.Heart],
    grantTime: '7:20 - 07/10/2022',
    queueStatus: QueueStatus.aborted,
    provideBy: 'Kiosk'
  },
  {
    no: 2010001,
    serviceName: [Service.Heart],
    grantTime: '7:20 - 07/10/2022',
    queueStatus: QueueStatus.aborted,
    provideBy: 'Kiosk'
  },
  {
    no: 2010001,
    serviceName: [Service.Heart],
    grantTime: '7:20 - 07/10/2022',
    queueStatus: QueueStatus.pending,
    provideBy: 'Kiosk'
  },
  {
    no: 2010001,
    serviceName: [Service.Heart],
    grantTime: '7:20 - 07/10/2022',
    queueStatus: QueueStatus.aborted,
    provideBy: 'Kiosk'
  },
  {
    no: 2010001,
    serviceName: [Service.Heart],
    grantTime: '7:20 - 07/10/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Hệ thống'
  },
]

export const queueTable: IQueueRow[] = [
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.pending,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.aborted,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },
  {
    no: 2010001,
    customerName: 'Lê Huỳnh Ái Vân',
    serviceName: [Service.Heart],
    grantTime: '14:35 - 07/11/2022',
    expireTime: '14:35 - 07/12/2022',
    queueStatus: QueueStatus.used,
    provideBy: 'Kiosk',
    queueDetail: true,
  },

]

export const deviceList: IDeviceRow[] = [
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk1',
    ipAddress: '192.169.1.2',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: false,
    displayUpdate: false,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk1',
    ipAddress: '192.169.1.2',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: false,
    displayUpdate: false,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Heart, Service.Space, Service.Eye],
    displayDetail: true,
    displayUpdate: true,
  },
];


export const serviceDetailList: IServiceRow[] = [
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',
    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_02',
    serviceName: 'Kiosk2',
    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: false,
    serviceUpdate: false,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',
    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDescribe: 'Chi tiết dịch vụ',
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
];
export const queueList: IServiceQueue[] = [
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 101010, queueStatus: QueueStatus.pending },
  { no: 101010, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.used },
  { no: 202020, queueStatus: QueueStatus.used },
  { no: 333333, queueStatus: QueueStatus.used },
  { no: 333333, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 444444, queueStatus: QueueStatus.pending },
  { no: 444444, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 929292, queueStatus: QueueStatus.aborted },
  { no: 929292, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
];

export const activeStatus = ['Tất cả', 'Hoạt động', 'Ngưng hoạt động'];
export enum EService {
  Heart = 'Khám tim mạch',
  Dental = 'Nha sĩ',
}
export enum EQueueStatus {
  All = 'Tất cả',
  Pending = 'Đang chờ',
  Used = 'Đã sử dụng',
  Aborted = 'Bỏ qua',
}
export enum EConnectionStatus {
  All = 'Tất cả',
  Connected = 'Kết nối',
  Disconnected = 'Mất kết nối',
}
export enum EQueueProvider {
  All = 'Tất cả',
  Kiosk = 'Kiosk',
  System = 'Hệ thống',
}
export enum EDeviceType {
  Kiosk = 'Kiosk',
  DisplayCounter = 'Display counter',
}
export enum EGraphDisplayType {
  Day = "Ngày",
  Week = "Tuần",
  Month = "Tháng"
}
export const grapthDisplayType = [EGraphDisplayType.Day, EGraphDisplayType.Week, EGraphDisplayType.Month]
export const deviveType = [EDeviceType.Kiosk, EDeviceType.DisplayCounter]
export const services = [EService.Heart, EService.Dental];
export const serviceList = [
  'Khám tim mạch',
  'Sản - phụ khoa',
  'Khám tai - mũi - họng',
];
export const queueStatus = [
  EQueueStatus.All,
  EQueueStatus.Pending,
  EQueueStatus.Used,
  EQueueStatus.Aborted,
];
export const connectionStatus = [
  EConnectionStatus.All,
  EConnectionStatus.Connected,
  EConnectionStatus.Disconnected,
];
export const queueProvider = [
  EQueueProvider.All,
  EQueueProvider.Kiosk,
  EQueueProvider.System,
];
