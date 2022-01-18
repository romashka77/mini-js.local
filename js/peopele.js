// import 'string.js';
class People {
    /**
     * Класс Человек
     * @param {string} fio по формату "Фамилия Имя Отчество"
     * @param {string} birthday день рождения по формату "dd.mm.yyyy"
     * @param {string} phones номер, если больше 2 номеров. то по формату "номер1, номер2"
     * @param {number} room комната
     */
    constructor(fio, birthday, phones = '', room = '') {
        let name = fio.toLowerCase().split(' ');
        this.name = {};
        this.name.f = firstUpperCase(name[0]);
        this.name.i = firstUpperCase(name[1]);
        this.name.o = firstUpperCase(name[2]);

        let date = birthday.trim().split('.');
        this.birthday = {};
        this.birthday.d = date[0];
        this.birthday.m = date[1];
        this.birthday.y = date[2];

        let arr = phones.split(',');
        this.phones = arr.map((value, index, arr) => value.trim());
        this.room = +room;
    }
    //  Фамилия Имя Отчество
    getFio() {
        return `${this.name.f} ${this.name.i} ${this.name.o}`;
    }
    // Имя Отчество Фамилия
    getFioReverse() {
        return `${this.name.i} ${this.name.o} ${this.name.f}`;
    }
    //  Фамилия И.О.
    getFioShort() {
        return `${this.name.f} ${this.name.i[0]}.${this.name.o[0]}.`;
    }
    //  И.О.Фамилия
    getFioShortReverse() {
        return `${this.name.i[0]}.${this.name.o[0]}.${this.name.f}`;
    }
    // Номера телефонов
    getPhones(all = true) {
        if (this.phones.length == 0 || this.phones[0].length == 0)
            return undefined;
        if (all) return this.phones.join(', ');
        else return this.phones[0];
    }
    // День рождения
    getBirthday() {
        return `${this.birthday.d}.${this.birthday.m}.${this.birthday.y}`;
    }
}
let p = new People('иванов иван иванович', '12.04.1977', '89001234567, 789749237,28462834', 5);
