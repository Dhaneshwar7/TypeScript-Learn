const user: (string | number)[] = [1, 'ok ', 234]; // example tupils

let NewUser: [string, number, boolean]; // order of array is matters in tupiles
NewUser = ['delta', 234, true];

let rgb: [number, number, number] = [234, 234, 34];

//with type tupiles

type User = [number, string];
const nayaUser: User = [234, 'dkfj'];

nayaUser[1] = 'ok.com';
nayaUser.push(23);
