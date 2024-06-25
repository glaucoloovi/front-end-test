import { HeaderCard } from '../HeaderCard'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { LogoIcon } from '../icons/LogoIcon'
import { MenuIcon } from '../icons/MenuIcon'
import { StyledHeader, StyledHeaderButton } from './styles'

export function Header() {
  return (
    <StyledHeader>
      <h1>
        <LogoIcon />
      </h1>
      <div className="card-group">
        <HeaderCard type="equity" value="130.521.230,02" />
        <HeaderCard type="valueApplied" value="521.230,02" />
        <HeaderCard type="percentageProfit" value="2,34%" />
      </div>
      <div className="card-group">
        <StyledHeaderButton aria-labelledby="wallet">
          <div className="icon">
            <ChevronDownIcon />
          </div>
          <div className="content">
            <p className="label" id="wallet">
              CARTEIRA
            </p>
            <strong>Minha Carteira</strong>
          </div>
        </StyledHeaderButton>
        <StyledHeaderButton aria-label="Menu">
          <div className="icon">
            <MenuIcon />
          </div>
        </StyledHeaderButton>
      </div>
    </StyledHeader>
  )
}
