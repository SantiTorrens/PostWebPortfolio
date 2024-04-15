import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadCrumb {
  name: string;
  url: string;
  id: number
}

interface BreadCrumbsProps {
  crumbs: BreadCrumb[];
}

export default function BreadCrumbs({ crumbs }: BreadCrumbsProps): ReactElement {
  const location = useLocation();
  const currentCrumb: BreadCrumb = crumbs.find((crumb) => crumb.url === location.pathname) as BreadCrumb;

  const renderCrumbs = (): ReactElement[] => {
    return crumbs.map((crumb) => {
      return (
        crumb.id <= currentCrumb.id ? (
          <Link to={crumb.url} className={`cursor-normal ${crumb.id !== currentCrumb.id ? 'text-blue-500' : ''}`}>
            {crumb.name}
            {crumb.id !== currentCrumb.id && <FontAwesomeIcon className="ml-2" icon={faChevronRight} />}
          </Link>
        )
          : <span></span>

      )
    })

  }
  return (
    <nav aria-label="breadcrumb">
      <div className="flex flex-row gap-2 breadcrumb">
        {renderCrumbs()}
        {/* {crumbs.map((crumb) => (
          {
            crumb.id >= currentCrumb.id ? (

              <span className="breadcrumb-item" key={crumb.name}>

                {location.pathname === crumb.url ? (
                  <span>{crumb.name}</span>
                ) : (
                  <a href={crumb.url}>{crumb.name}</a>
                )}
              </span>
            )}
        ))} */}
      </div>
    </nav>
  );
}

