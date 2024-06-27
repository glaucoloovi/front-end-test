import { IncomeCard } from '../IncomeCard'
import { Input } from '../Input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../Pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select'
import { StyledIncomeCardContent, StyledMyIncomesGroup } from './styles'

export function MyIncomesGroup() {
  return (
    <StyledMyIncomesGroup>
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
            <StyledIncomeCardContent $variant="default">
              <p className="description">
                Tesouro IPCA+ com Juros Semestrais 2024 &#40;NTNB&#41;
              </p>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CLASSE</span>
                <p className="content-wrapper-value">Tesouro Direto</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="MINHA POSIÇÃO">
            <StyledIncomeCardContent $variant="primary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">VALOR INVES.</span>
                <p className="content-wrapper-value">1.003,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SALDO BRUTO</span>
                <p className="content-wrapper-value">1.124,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">RENT.</span>
                <p className="content-wrapper-value">48,55%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">% DA CART.</span>
                <p className="content-wrapper-value">5,33%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CDI</span>
                <p className="content-wrapper-value">1,24</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SOBRE CDI</span>
                <p className="content-wrapper-value">118</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="VENCIMENTO">
            <StyledIncomeCardContent $variant="secondary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">DATA VENC.</span>
                <p className="content-wrapper-value">15.05.2024</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">DIAS ATÉ VENC.</span>
                <p className="content-wrapper-value">5762</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
        </div>
        <div className="incomes-group">
          <IncomeCard label="TÍTULO">
            <StyledIncomeCardContent $variant="default">
              <p className="description">
                Tesouro IPCA+ com Juros Semestrais 2024 &#40;NTNB&#41;
              </p>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CLASSE</span>
                <p className="content-wrapper-value">Tesouro Direto</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="MINHA POSIÇÃO">
            <StyledIncomeCardContent $variant="primary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">VALOR INVES.</span>
                <p className="content-wrapper-value">1.003,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SALDO BRUTO</span>
                <p className="content-wrapper-value">1.124,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">RENT.</span>
                <p className="content-wrapper-value">48,55%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">% DA CART.</span>
                <p className="content-wrapper-value">5,33%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CDI</span>
                <p className="content-wrapper-value">1,24</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SOBRE CDI</span>
                <p className="content-wrapper-value">118</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="VENCIMENTO">
            <StyledIncomeCardContent $variant="secondary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">DATA VENC.</span>
                <p className="content-wrapper-value">15.05.2024</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">DIAS ATÉ VENC.</span>
                <p className="content-wrapper-value">5762</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
        </div>
        <div className="incomes-group">
          <span className="rescued-product">PRODUTO RESGATADO</span>
          <IncomeCard label="TÍTULO">
            <StyledIncomeCardContent $variant="default">
              <p className="description">
                Tesouro IPCA+ com Juros Semestrais 2024 &#40;NTNB&#41;
              </p>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CLASSE</span>
                <p className="content-wrapper-value">Tesouro Direto</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="MINHA POSIÇÃO">
            <StyledIncomeCardContent $variant="primary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">VALOR INVES.</span>
                <p className="content-wrapper-value">1.003,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SALDO BRUTO</span>
                <p className="content-wrapper-value">1.124,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">RENT.</span>
                <p className="content-wrapper-value">48,55%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">% DA CART.</span>
                <p className="content-wrapper-value">5,33%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CDI</span>
                <p className="content-wrapper-value">1,24</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SOBRE CDI</span>
                <p className="content-wrapper-value">118</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="VENCIMENTO">
            <StyledIncomeCardContent $variant="secondary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">DATA VENC.</span>
                <p className="content-wrapper-value">15.05.2024</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">DIAS ATÉ VENC.</span>
                <p className="content-wrapper-value">5762</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
        </div>
        <div className="incomes-group">
          <IncomeCard label="TÍTULO">
            <StyledIncomeCardContent $variant="default">
              <p className="description">
                Tesouro IPCA+ com Juros Semestrais 2024 &#40;NTNB&#41;
              </p>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CLASSE</span>
                <p className="content-wrapper-value">Tesouro Direto</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="MINHA POSIÇÃO">
            <StyledIncomeCardContent $variant="primary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">VALOR INVES.</span>
                <p className="content-wrapper-value">1.003,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SALDO BRUTO</span>
                <p className="content-wrapper-value">1.124,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">RENT.</span>
                <p className="content-wrapper-value">48,55%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">% DA CART.</span>
                <p className="content-wrapper-value">5,33%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CDI</span>
                <p className="content-wrapper-value">1,24</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SOBRE CDI</span>
                <p className="content-wrapper-value">118</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="VENCIMENTO">
            <StyledIncomeCardContent $variant="secondary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">DATA VENC.</span>
                <p className="content-wrapper-value">15.05.2024</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">DIAS ATÉ VENC.</span>
                <p className="content-wrapper-value">5762</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
        </div>
        <div className="incomes-group">
          <IncomeCard label="TÍTULO">
            <StyledIncomeCardContent $variant="default">
              <p className="description">
                Tesouro IPCA+ com Juros Semestrais 2024 &#40;NTNB&#41;
              </p>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CLASSE</span>
                <p className="content-wrapper-value">Tesouro Direto</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="MINHA POSIÇÃO">
            <StyledIncomeCardContent $variant="primary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">VALOR INVES.</span>
                <p className="content-wrapper-value">1.003,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SALDO BRUTO</span>
                <p className="content-wrapper-value">1.124,00</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">RENT.</span>
                <p className="content-wrapper-value">48,55%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">% DA CART.</span>
                <p className="content-wrapper-value">5,33%</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">CDI</span>
                <p className="content-wrapper-value">1,24</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">SOBRE CDI</span>
                <p className="content-wrapper-value">118</p>
              </div>
            </StyledIncomeCardContent>
          </IncomeCard>
          <IncomeCard label="VENCIMENTO">
            <StyledIncomeCardContent $variant="secondary">
              <div className="content-wrapper">
                <span className="content-wrapper-label">DATA VENC.</span>
                <p className="content-wrapper-value">15.05.2024</p>
              </div>
              <div className="content-wrapper">
                <span className="content-wrapper-label">DIAS ATÉ VENC.</span>
                <p className="content-wrapper-value">5762</p>
              </div>
            </StyledIncomeCardContent>
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
    </StyledMyIncomesGroup>
  )
}
