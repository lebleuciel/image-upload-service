const { Entity, PrimaryGeneratedColumn, Column, BaseEntity } = require('typeorm');

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id;

    @Column({ unique: true })
    email;

    @Column({ unique: true })
    phone;

    @Column()
    password;
}

module.exports = User;
