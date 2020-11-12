import { RestProfile } from './RestProfile';

function RestProfiles({ rprofiles }) {
  return (
    <section className="rprofiles">
      <h1>Tu Perfil</h1>
      {!!rprofiles && rprofiles.length > 0 && rprofiles.map(({ id, restaurantName, address, phone, scheduleFrom, scheduleTo, deposit }) => {
        return (
          <RestProfile
            key={id}
            restaurantName={restaurantName}
            address={address}
            phone={phone}
            scheduleFrom={scheduleFrom}
            scheduleTo={scheduleTo}
            deposit={deposit}
          />
        )
      })}
    </section>
  )
}

export default RestProfiles;
