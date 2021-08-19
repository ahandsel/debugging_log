const deleteStart = 1;
const deleteEnd = 3;

let deleteList = [];
for (let i = deleteStart; i <= deleteEnd; i++) {
  deleteList.push(i);
}

const count = deleteList.length;
const appId = kintone.app.getId(); // getId; not getID
console.log(appId);

const body = {
  'app': appId,
  'ids': deleteList
};

kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', body, function(resp) {
  // success
  console.log(`Records from ${deleteStart} to ${deleteEnd} has been deleted \n ${count} records`);
}, function(error) {
  // error
  console.log(error);
});