import React from 'react'
import MenuItem from '../MenuItem'

const DesktopMenu = () => {
  return (
    <div className="flex flex-row flex-wrap justify-end content-end space-x-10">
      <MenuItem
        title={"Aktivitetsschema"}
        redirect={"aktivitet"}
        isMobile={false}
        setMenuIsOpen={() => undefined}
      />
      <MenuItem
        title={"Schema Basår"}
        redirect={"https://cloud.timeedit.net/liu/web/schema/ri167XQQ597Z50Qm37070gZ6y5Y7700Q6Y93Y7.html"}
        isMobile={false}
        setMenuIsOpen={() => undefined}
      />
      <MenuItem
        title={"Nolleboken"}
        redirect={"nolleboken"}
        isMobile={false}
        setMenuIsOpen={() => undefined}
      />
    </div>
  )
}

export default DesktopMenu