import { uuidGenerateV4 } from 'src/utils/uuid';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Product } from './Product.model';

@Entity('suppliers')
export class Supplier {
  @PrimaryColumn({ type: 'uuid', default: () => uuidGenerateV4() })
    id!: string;

  @Column({ unique: true, nullable: false })
    name!: string;

  @Column({ nullable: true })
    email!: string;

  @Column({ default: () => new Date() })
    created_at!: Date;

  @Column({ default: () => new Date() })
    updated_at!: Date;

  @OneToMany(() => Product, product => product.id)
  @JoinColumn({ name: 'product' })
    products!: Product[];
}
