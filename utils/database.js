/**
 * @class Database
 */

import * as firebase from 'firebase';

class Database {

    /**
     * Listen for changes to a users mobile number
     * @param userId
     * @param callback Users mobile number
     */
    static listenFeedChange(userId, callback) {
        const feedPath = '/feed';

        firebase.database().ref(feedPath).on('value', (snapshot) => {
            let mobile = '';

            if (snapshot.val()) {
                mobile = snapshot.val().mobile;
            }

            callback(mobile);
        });
    }

}

module.exports = Database;
