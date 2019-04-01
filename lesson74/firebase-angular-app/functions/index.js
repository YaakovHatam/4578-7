const functions = require('firebase-functions');

exports.createStudent = functions.firestore.document('students/{studentId}').onCreate((snap, context) => {
    return snap.ref.set({
        created_timestamp: new Date()
    }, {
        merge: true
    });
});