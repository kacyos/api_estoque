import { uuidGenerateV4 } from 'src/utils/uuid';
import { Column, JoinColumn, ManyToOne } from 'typeorm';
import { Supplier } from './Supplier.model';

export class Product {
  @Column({ type: 'uuid', default: () => uuidGenerateV4() })
    id!: string;

  @Column({ nullable: false })
    internal_code!: string;

  @Column({ nullable: false })
    name!: string;

  @Column({ nullable: false })
    quantity!: number;

  @Column({ nullable: false })
    type!: string;

  @Column({ nullable: false })
    team!: string;

  @Column({ nullable: false })
    size!: string;

  @Column({ nullable: false })
    price!: number;

  @Column({ default: () => new Date() })
    created_at!: Date;

  @Column({ default: () => new Date() })
    updated_at!: Date;

  @ManyToOne(() => Supplier, supplier => supplier.products)
  @JoinColumn({ name: 'supplier_id' })
    supplier!: Supplier;
}
