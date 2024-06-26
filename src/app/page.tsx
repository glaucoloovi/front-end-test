import { Aside } from '@/components/Aside/intex'
import { IncomeCard } from '@/components/IncomeCard'
import { Input } from '@/components/Input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/Pagination'
import { ProfitabilityChart } from '@/components/ProfitabilityChart'
import { ResumeCard } from '@/components/ResumeCard'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select'
import { StyledMain, Wrapper } from './styles'

export default function Page() {
  return (
    <Wrapper>
      <Aside />
      <StyledMain>
        <h2 className="title">Renda fixa</h2>
        <div className="resume-card-group">
          <ResumeCard label="SALDO BRUTO" value="R$ 207.653,10" />
          <ResumeCard label="VALOR APLICADO" value="R$ 170.025,64" />
          <ResumeCard label="RESULTADO" value="R$ 37.638,46" />
          <ResumeCard label="RENTABILIDADE" value="25,08%" />
          <ResumeCard label="CDI" value="23,68%" />
          <ResumeCard label="% SOBRE CDI" value="320%" />
        </div>
        <ProfitabilityChart />
        <div className="my-incomes-group">
          <div className="header">
            <h3 className="label">Minhas Rendas Fixas</h3>
            <div className="filters">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                  <SelectItem value="2">Option 2</SelectItem>
                  <SelectItem value="3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <Input />
            </div>
          </div>
          <section className="incomes">
            <div className="incomes-group">
              <IncomeCard label="TÍTULO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="MINHA POSIÇÃO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="VENCIMENTO">
                <p>Nome do título</p>
              </IncomeCard>
            </div>
            <div className="incomes-group">
              <IncomeCard label="TÍTULO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="MINHA POSIÇÃO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="VENCIMENTO">
                <p>Nome do título</p>
              </IncomeCard>
            </div>
            <div className="incomes-group">
              <IncomeCard label="TÍTULO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="MINHA POSIÇÃO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="VENCIMENTO">
                <p>Nome do título</p>
              </IncomeCard>
            </div>
            <div className="incomes-group">
              <IncomeCard label="TÍTULO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="MINHA POSIÇÃO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="VENCIMENTO">
                <p>Nome do título</p>
              </IncomeCard>
            </div>
            <div className="incomes-group">
              <IncomeCard label="TÍTULO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="MINHA POSIÇÃO">
                <p>Nome do título</p>
              </IncomeCard>
              <IncomeCard label="VENCIMENTO">
                <p>Nome do título</p>
              </IncomeCard>
            </div>
          </section>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" scroll={false} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="/?page=1" scroll={false}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="/?page=2" scroll={false} isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" scroll={false} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </StyledMain>
    </Wrapper>
  )
}
