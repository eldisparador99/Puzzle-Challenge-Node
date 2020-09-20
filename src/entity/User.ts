import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Recipe } from './Recipe';
import { Field, ObjectType, Int} from "type-graphql"

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(()=> Int )
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	name!: string;

	@Field()
	@Column()
	email!: string;

	@Column()
	password!: string;

	@OneToMany(() => Recipe, (recipe: Recipe) => recipe.user)
	recipes!: Recipe[];
}