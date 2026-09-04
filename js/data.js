var RKDLStore = (function () {
    var STORAGE_KEY = 'rkdl_customer_data';
    var NEWS_KEY = 'rkdl_newsletter_data';

    function readAll() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function writeAll(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function addContact(record) {
        var data = readAll();
        record.id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
        record.date = new Date().toISOString();
        record.type = 'contact';
        data.push(record);
        writeAll(data);
        return record;
    }

    function addNewsletter(value) {
        var data = readAll();
        var record = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            value: value,
            date: new Date().toISOString(),
            type: 'newsletter'
        };
        data.push(record);
        writeAll(data);
        return record;
    }

    function removeRecord(id) {
        var data = readAll();
        data = data.filter(function (r) { return r.id !== id; });
        writeAll(data);
    }

    function clearAll() {
        localStorage.removeItem(STORAGE_KEY);
    }

    function getCounts() {
        var data = readAll();
        var counts = { contact: 0, newsletter: 0, total: data.length };
        data.forEach(function (r) {
            if (r.type === 'contact') counts.contact++;
            if (r.type === 'newsletter') counts.newsletter++;
        });
        return counts;
    }

    return {
        readAll: readAll,
        addContact: addContact,
        addNewsletter: addNewsletter,
        removeRecord: removeRecord,
        clearAll: clearAll,
        getCounts: getCounts
    };
})();
